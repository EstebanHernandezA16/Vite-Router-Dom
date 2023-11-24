//formik, Yup 



export const FormReserva = () =>{
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-md mb-40">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Reserva de Hotel</h2>
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="startDate" className="block text-sm font-semibold text-gray-600 mb-2">
                Fecha de Inicio
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-semibold text-gray-600 mb-2">
                Fecha Final
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-400  text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Reservar
            </button>
          </form>
        </div>
      );
    
}