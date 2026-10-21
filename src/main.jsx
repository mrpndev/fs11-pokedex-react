import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				{/* default route */}
				<Route path='/' element={<App />} />
				{/* Dynamic route parameter */}
				<Route path='/:pokemon' element={<App />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
