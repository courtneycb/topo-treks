type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">{children}</div>
}

export default Container
