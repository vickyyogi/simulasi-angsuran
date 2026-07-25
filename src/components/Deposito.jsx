import Header from "./Header"
import './style.comp.css'

function Deposito(){
    return (
        <div className="flex flex-row gap-4 card">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Simulasi Deposito</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Jumlah Deposito</label>
                        <input type="number" id="amount" name="amount" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">Suku Bunga (%)</label>
                        <input type="number" id="interestRate" name="interestRate" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Durasi (bulan)</label>
                        <input type="number" id="duration" name="duration" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">Hitung</button>
                </form>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Hasil Simulasi</h2>
                <p className="text-gray-700">Total Bunga: <span className="font-medium">Rp 0</span></p>
                <p className="text-gray-700">Total Akhir: <span className="font-medium">Rp 0</span></p>
            </div>
        </div>
    );
}

export default Deposito;