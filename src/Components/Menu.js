export default function Menu(){
    return(
        <div >
            <nav className= "Menu">
                <a href="/">Genisis</a>
                <a href="/">Produtos</a>
                <a href="/">Contato</a>
                <a href="/">Serviços</a>
                <a href="/">Sobre Nos</a>
            </nav>
      
      <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: gray;
        
      }
      nav {
        padding: 30px;
        padding-top: -200px;
      }
    a{
      padding:40px;
    }
      
    `}</style>
     </div>
    );
}