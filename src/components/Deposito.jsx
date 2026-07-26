import Header from "./Header"
import './style.comp.css'
import {useState} from 'react'

function Deposito(){

    const [formData, setFormData] = useState({
        depositAmount:'0',
        interestRate:'5'
    });

    const [result, setResult] = useState(null);
    
    const convertDecimal = parseFloat(formData.interestRate) /100;

    const converToRupiah = (num) =>{
        if (isNaN(num)) return 'Rp.0';
        return new Intl.NumberFormat('id-ID', {
            style:'currency',
            currency:'IDR',
            minimumFractionDigits:0,
            maximumFractionDigits:0
        }).format(num);
    }

    const bungaDeposito = (e) => {
        e.preventDefault();

        const deposite = parseInt(formData.depositAmount) || 0;
        const hasilDeposito = deposite * (convertDecimal / 12);

        setResult({hasilDeposito, deposite})
    }
    return (
        <div className="grid md:grid-cols-2 gap-4 p-4">
            <div className=" bg-gradient-to-br bg-indigo-900/90 to-slate-900/50 p-4 rounded-lg shadow-md space-y-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-50">Simulasi Deposito</h2>
                <form className="space-y-4 text-white">
                    <div>
                        <label htmlFor="depositeAmount" className="block text-sm font-medium ">Jumlah Deposito (Rp)</label>
                        <input type="number" name="depositeAmount" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3 pl-2" onChange={(e) => setFormData({...formData, depositAmount: e.target.value})} value={setFormData.depositAmount} placeholder="Rp. 100000000"/>
                    </div>
                    <div>
                        <label htmlFor="interestRate" className="block text-sm font-medium ">Suku Bunga (%)</label>
                        <input type="number" id="interestRate" name="interestRate" step="0.01" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3 pl-2" onChange={(e) => setFormData({...formData, interestRate: e.target.value})} value={setFormData.interestRate} placeholder="5"/>
                    </div>
                    <button type="submit" className="w-full bg-white text-indigo-950 py-2 px-4 rounded-md hover:bg-emerald-600 hover:text-white transition-colors" onClick={bungaDeposito}>Hitung</button>
                </form>
            </div>
            <div className="bg-gradient-to-br bg-indigo-900/90 to-slate-900/50 p-4 rounded-lg shadow-md text-center border border-gray-200 text-white">
                <h2 className="text-lg font-semibold mb-2">Hasil Bunga per Bulan</h2>
                <span className="text-4xl font-extrabold">RP. {result ? converToRupiah(result.hasilDeposito) : 0} </span>
                <p className=" mt-5">Total Akhir (6 bulan):</p> <span className="font-medium">Rp {result ? converToRupiah(result.deposite + (result.hasilDeposito * 6)): 0}</span>
                <p className="mt-5 font-small">* NB : Hasil diatas merupakan hitungan kasar berdasarkan bunga deposito saat ini</p>
            </div>
        </div>
    );
}

export default Deposito;