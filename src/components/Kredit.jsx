import Header from "./Header"
import './style.comp.css'
import {useState} from 'react'

function Kredit(){
    const [formData, setFormData] = useState({
        loanAmount:'0',
        interestRate:'1.5',
        admFee: '2',
        notarisFee:'0',
        materaiFee:'0',
        lainnyaFee:'0',
        pajakStnkFee:'0'
    });
    return (
        <div className="grid md:grid-cols-4 gap-4 p-4 mt-16">
            <div className=" bg-gradient-to-br bg-indigo-900/90 to-slate-900/50 border border-slate-700/50 p-4 rounded-lg shadow-md space-y-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-50">Simulasi Kredit</h2>
                <form className="space-y-4 text-white text-sm">
                    
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
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Biaya Lainnya (Rp)</label>
                        <input type="number" name="lainnyaFee" value={formData.lainnyaFee} onChange={(e) => setFormData({...formData, lainnyaFee: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 pl-2" />
                        <label htmlFor="loanAmount" className="block text-sm font-medium ">Biaya Pajak/STNK (Rp)</label>
                        <input type="number" name="pajakStnkFee" value={formData.pajakStnkFee} onChange={(e) => setFormData({...formData, pajakStnkFee: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 pl-2" />
                    
                    <button type="submit" className="w-full bg-white text-indigo-950 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer" >Hitung</button>
                </form>
            </div>
            <div className="bg-gradient-to-br bg-indigo-900/90 to-slate-900/50 border border-slate-700/50 p-4 rounded-lg shadow-md space-y-6 text-white">
                <h2 className="text-2xl font-semibold mb-2">Hasil PA</h2>
            </div>
        </div>
    );
}

export default Kredit;