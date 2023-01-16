import Container from './container'

const Footer = () => {
  return (
    <footer className="mx-auto mt-32">
      <Container>
        <div className="border-t border-gray-200 py-10">
          <img
            className="mx-auto h-5 w-auto"
            src="/assets/blog/logo/topo-treks-icon.svg"
            alt="Topo Treks"
          />
          <p className="mt-5 text-center text-sm leading-6 text-slate-700">
            Developed by Courtney Bracefield
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
