import React from "react";

function Detail() {
  return (
    <div className="container">
      <div className="container_top">
        <img />
        <h1>Název trasy</h1>
      </div>
      <div className="container_top_info">
        <ul>
          <li>délka</li>
          <li>převýšení</li>
          <li>typ</li>
          <li>obtížnost</li>
        </ul>
      </div>

      <div className="container_middle">
        <p>tady bude mapa</p>
      </div>
      <div className="container_bottom">
        <h3>Popis</h3>
        <p>
          Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel
          sapien. Curabitur vitae diam non enim vestibulum interdum. Sed vel
          lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          fermentum risus id tortor. Phasellus et lorem id felis nonummy
          placerat. Aliquam erat volutpat. Nullam sit amet magna in magna
          gravida vehicula. Morbi scelerisque luctus velit. Quisque tincidunt
          scelerisque libero. Nullam eget nisl. Temporibus autem quibusdam et
          aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Cras
          elementum. Aliquam in lorem sit amet leo accumsan lacinia. Nunc
          auctor. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim.
          Etiam commodo dui eget wisi. Mauris dolor felis, sagittis at, luctus
          sed, aliquam non, tellus.
        </p>
      </div>
      <div className="container_bottom_tip">
        <h3>Tip!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mattis turpis sollicitudin nisl rhoncus elementum. Integer fringilla
          augue at mauris congue semper.
        </p>
      </div>
    </div>
  );
}

export default Detail;
