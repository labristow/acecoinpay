
interface Background{
    children: JSX.Element
}
function Background({
    children
}: Background) {
  return (
    <div className="w-full h-screen background">
        {children}
    </div>
  )
}

export default Background