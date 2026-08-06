import Header from "./Header"
import './style.comp.css'
import {useState} from 'react'
import { converToRupiah } from "../utils/convertRupiah"

function Kredit(){

    const [result, setResult] = useState('');

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
            notaris,
            materai,
            adm,
            pajak,
            lain
        })
    }

    return (
        
        <>
        <main className="max-w-7xl mx-auto px-6 py-2">
       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/** untuk form section */}
            <div className=" lg:col-span-5 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 space-y-4">
                <h2 className="text-2xl font-semibold mb-2 text-slate-950">Simulasi Kredit</h2>
                <form className="space-y-4 text-slate-950 text-sm" onSubmit={countCredit}>
                    
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Jumlah Kredit (Rp)</label>
                        <input type="number" name="loanAmount" value={formData.loanAmount} onChange={(e) => setFormData({...formData, loanAmount: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white" />
                        <label htmlFor="interestRate" className="block text-sm font-medium ">Suku Bunga (%)</label>
                        <input type="number" id="interestRate" name="interestRate" step="0.01" value={formData.interestRate} onChange={(e)=> setFormData({...formData, interestRate: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"/>
                        <label htmlFor="interestRate" className="block text-sm font-medium ">Biaya Administrasi (%)</label>
                        <input type="number" id="admFee" name="admFee" step="0.01" value={formData.admFee} onChange={(e)=> setFormData({...formData, admFee: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"/>
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Biaya Notaris(Rp)</label>
                        <input type="number" name="notarisFee" value={formData.notarisFee} onChange={(e) => setFormData({...formData, notarisFee: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white" />
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Biaya Materai (Rp)</label>
                        <input type="number" name="materaiFee" value={formData.materaiFee} onChange={(e) => setFormData({...formData, materaiFee: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white" />
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Biaya Pajak/STNK (Rp)</label>
                        <input type="number" name="pajakStnkFee" value={formData.pajakStnkFee} onChange={(e) => setFormData({...formData, pajakStnkFee: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white" />
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Biaya Lainnya (Rp)</label>
                        <input type="number" name="lainnyaFee" value={formData.lainnyaFee} onChange={(e) => setFormData({...formData, lainnyaFee: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white" />
                    
                    <button type="submit" className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer" >Hitung</button>
                </form>
            </div>

            {/* Untuk Daftar Angsuran */}
            <div className="lg:col-span-3 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold mb-2">Daftar Angsuran</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                    <thead >
                        <tr className="border-b border-slate-100 text-slate-400 text-xs uppercase tracking-wider">
                            <th className="pb-3 font-semibold">Jangka Waktu</th>
                            <th className="pb-3 text-right font-semibold">Angsuran (Rp.)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {
                            jw.map((t)=>{
                                return (
                                    <tr key={t} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="py-2.5 font-medium text-slate-700">{t}</td>
                                        <td className="py-2.5 text-right font-bold text-slate-900">{result ? converToRupiah(result.creditFlat[t]) : '-'}</td>
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
       
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                <h2 className="font-semibold text-2xl text-slate-950 py-2.5">Terima Bersih</h2>
                <ul className="block space-y-2">
                        <li>{formData.admFee === '0' ? '' : <span className="text-lg ">Biaya Administrasi : {converToRupiah(result.adm/100 * formData.loanAmount)}</span>}</li>
                        <li>{formData.notarisFee === '0' ? '' : <span className="text-lg ">Biaya Notaris : {converToRupiah(result.notaris)}</span>}</li>
                        <li>{formData.materaiFee === '0' ? '' : <span className="text-lg ">Biaya Materai : {converToRupiah(result.materai)}</span>}</li>
                        <li>{formData.pajakStnkFee === '0' ? '' : <span className="text-lg ">Biaya Pajak/STNK : {converToRupiah(result.pajak)}</span>}</li>
                        <li>{formData.lainnyaFee === '0' ? '' : <span className="text-lg ">Biaya Lainnya : {converToRupiah(result.lain)}</span>}</li>
                        <li><hr className="my-2 border-slate-700/50"/></li>
                        <li><span className="text-2xl text-slate-950">Terima Bersih : {result ? converToRupiah(result.nettLoan) : 'Rp. 0 '}</span></li>
                </ul>
                </div>
            </div>
            
        </div>
        </main>
        </>
    );
}

export default Kredit;