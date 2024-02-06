
function ToggleBox({label = "", isChecked = true, id = ""}) {
  return ( 
  <label htmlFor={id} className="relative flex items-center me-5 cursor-pointer">
    <input id={id} name={id} type="checkbox" value="" className="sr-only peer" checked={isChecked} />
    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-trend"></div>
    <span className="ms-3 text-sm font-medium text-gray-900">{label}</span>
  </label> 
  )
}

export default ToggleBox