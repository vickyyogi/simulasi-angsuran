import Header from "./Header"
import './style.comp.css'
import {useState} from 'react'
import { converToRupiah } from "../utils/convertRupiah"

function Kredit(){

    const [result, setResult] = useState(null)

    const [formData, setFormData] = useState({
        loanAmount:'0',
        interestRate:'1.5',
        admFee: '2',
        notarisFee:'0',
        materaiFee:'0',
        lainnyaFee:'0',
        pajakStnkFee:'0'
    });

    const jw = [6,10,12,18,24,30,36,42,48,54,60];

    const countCredit = (e) => {
        e.preventDefault();

        const plafond = parseInt(formData.loanAmount) || 0;
        const bunga = parseFloat(formData.interestRate) || 0;
        const adm = parseFloat(formData.admFee) || 0;
        const notaris = parseFloat(formData.notarisFee) || 0;
        const materai = parseFloat(formData.materaiFee) || 0;
        const lain = parseFloat(formData.lainnyaFee) || 0;
        const pajak = parseFloat(formData.pajakStnkFee) || 0;

        const creditFlat = {};

        jw.forEach((tenor) => {
            creditFlat[tenor] = Math.ceil(((((plafond * (bunga/100)) * tenor) + plafond)/ tenor)/ 500 ) * 500;
        })


        const nettLoan = plafond - ((adm/100 * plafond) + notaris + materai + lain + pajak);

        setResult({
            jw,
            creditFlat,
            nettLoan,
            notaris,adm,materai,lain,pajak
        })
    }

    return (
        
        <>
        <div className="grid md:grid-cols-2 gap-4 p-4 max-w-7xl mx-auto">
            {/** untuk form section */}
            <div className=" bg-linear-to-br bg-indigo-900/90 to-slate-900/50 border border-slate-700/50 p-4 rounded-lg shadow-md space-y-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-50">Simulasi Kredit</h2>
                <form className="space-y-4 text-white text-sm" onSubmit={countCredit}>
                    
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Jumlah Kredit (Rp)</label>
                        <input type="number" name="loanAmount" value={formData.loanAmount} onChange={(e) => setFormData({...formData, loanAmount: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 pl-2" />
                        <label htmlFor="interestRate" className="block text-sm font-medium ">Suku Bunga (%)</label>
                        <input type="number" id="interestRate" name="interestRate" step="0.01" value={formData.interestRate} onChange={(e)=> setFormData({...formData, interestRate: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 pl-2" placeholder="5"/>
                        <label htmlFor="interestRate" className="block text-sm font-medium ">Biaya Administrasi (%)</label>
                        <input type="number" id="admFee" name="admFee" step="0.01" value={formData.admFee} onChange={(e)=> setFormData({...formData, admFee: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 pl-2" placeholder="5"/>
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Biaya Notaris(Rp)</label>
                        <input type="number" name="notarisFee" value={formData.notarisFee} onChange={(e) => setFormData({...formData, notarisFee: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 pl-2" />
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Biaya Materai (Rp)</label>
                        <input type="number" name="materaiFee" value={formData.materaiFee} onChange={(e) => setFormData({...formData, materaiFee: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 pl-2" />
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Biaya Pajak/STNK (Rp)</label>
                        <input type="number" name="pajakStnkFee" value={formData.pajakStnkFee} onChange={(e) => setFormData({...formData, pajakStnkFee: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 pl-2" />
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Biaya Lainnya (Rp)</label>
                        <input type="number" name="lainnyaFee" value={formData.lainnyaFee} onChange={(e) => setFormData({...formData, lainnyaFee: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 pl-2" />
                    
                    <button type="submit" className="w-full bg-white text-indigo-950 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer" >Hitung</button>
                </form>
            </div>

            {/* Untuk Daftar Angsuran */}
            <div className="bg-linear-to-br bg-indigo-900/90 to-slate-900/50 border border-slate-700/50 p-4 rounded-lg shadow-md space-y-6 text-white">
                <h2 className="text-2xl font-semibold mb-2">Daftar Angsuran</h2>
                <p>Untuk Pinjaman Flat</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-white">
                    <thead className="text-center text-xs text-white uppercase bg-slate-950/50 border-b border-slate-700/50">
                        <tr>
                            <td className="px-6 py-3 font-semibold">Jangka Waktu</td>
                            <td className="px-6 py-3 font-semibold">Angsuran (Rp.)</td>
                        </tr>
                    </thead>
                    <tbody className="bg-indigo-950/50 divide-amber-50/50 divide-y">
                        {
                            jw.map((t)=>{
                                return (
                                    <tr key={t} className="text-center border-b border-slate-700/50">
                                        <td className="px-6 py-3 text-center">{t}</td>
                                        <td className="px-6 py-3">{result ? converToRupiah(result.creditFlat[t]) : 0}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <span className="font-light text-sm">*NB : Tabel diatas merupakan hitungan berdasarkan bunga saat ini 1,5 %</span>
                </div>
            </div>
        </div>
        <div className="grid md:grid-cols-1 p-4 max-w-7xl mx-auto">
            <div className="bg-linear-to-br bg-indigo-900/90 p-4 rounded-lg shadow-md space-y-6">
                <h2 className="font-semibold text-2xl text-white">Terima Bersih</h2>
                <div className="block p-1">
                    <div className="flex">
                        <span>Adm :</span>
                        <span>{result ? converToRupiah(result.adm):'0'}</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Kredit;