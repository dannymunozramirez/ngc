const props = {
  tabs: {
    selected: 0,
    role: "navigation",
  },
  tab: {
    role: "presentation",
    tabIndex: 0,
  },
};
const NgcLanding = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "gray" }}
        className="bx--grid bx--grid--full-width landing-page  "
      >
        <div
          //
          style={
            {
              // backgroundImage: `url("https://scontent.fymy1-2.fna.fbcdn.net/v/t39.30808-6/243160529_574830190633980_996997480295202979_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=FiAfl71WZ5QAX9tnyBJ&_nc_ht=scontent.fymy1-2.fna&oh=00_AT9AVBttTaku83fzH3sUsS1U1dXS36lgeYkQbKrSLGS0pw&oe=6282DFC7")`,
              // backgroundPosition: 'center center',
              // backgroundSize:'100$',
            }
          }
          className="cds--row landing-page__banner estilos-portada "
        >
          <div className="cds--col-lg-16">
            <span style={{ textAlign: "center" }}>
              <div>
                <h1 className="landing-page__heading">
                  <span style={{ fontSize: 80 }}>NGC</span>
                  <span style={{ fontSize: 60 }}> - La Serena, Chile</span>{" "}
                  <br />
                </h1>
              </div>
              <br />
              <h3> Nueva Generación de Constructores</h3>
              <h3>
                <strong> EN CONSTRUCCIÓN </strong>
              </h3>
            </span>
          </div>
        </div>
        <div className="cds--row landing-page__r2">
          <div className="cds--col cds--no-gutter">
            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div className="bx--row landing-page__tab-content">
                <div className="bx--col-lg-16">
                  Introducción de la empresa Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Asperiores, facilis sint. Dicta
                  id voluptates nobis illum alias odio est quod architecto
                  obcaecati excepturi aliquam nisi quibusdam, deserunt dolore.
                  Id, asperiores!
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default NgcLanding;
