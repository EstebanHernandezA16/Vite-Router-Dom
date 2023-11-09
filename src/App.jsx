
import { router } from './components/routes/routes'
import { RouterProvider } from 'react-router-dom'

export const App = () =>{



    return (
      <>
         <RouterProvider router={router}/>
      </>
    )

  
}
