import './App.css';
import Props from './components/Props/props';
import Api from './components/ConsumiendoApi/ConsumiendoApi';

function App() {
  return (
    <div className='App'>
      
        {/* <Comp saludar='Hola'/> */}

        <Props 
          imagen='https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_640.jpg'
          titulo='Nuestra roca extraña' 
          texto='Nuestro hogar, el planeta Tierra, es un planeta terrestre y rocoso. Tiene una superficie sólida y activa, con montañas, valles, cañones, llanuras y mucho más. La Tierra es especial porque es un planeta océano, ya que el agua cubre el 70% de su superficie.'
        />

        <Props
          imagen='https://upload.wikimedia.org/wikipedia/commons/7/7f/El_sol.jpg'
          titulo='El gigante Sol' 
          texto='El Sol es una estrella, es decir, un cuerpo celeste que brilla con luz propia, compuesto de hidrógeno y helio a enormes temperaturas en estado de plasma. Es la estrella mas cercana a La Tierra y de la que depende toda la vida en ella. Concentrada en el Sol encontramos el 99,85% de toda la masa del Sistema Solar.'
        
        />

        <Props 
          imagen='https://cdn.pixabay.com/photo/2011/12/13/14/30/mars-11012_1280.jpg'
          titulo='Nuestro planeta rojo' 
          texto='Marte tiene la mitad del tamaño de la Tierra. A veces es llamado el planeta rojo. Es rojo debido al hierro oxidado de su suelo. Al igual que la Tierra, Marte tiene estaciones del año, casquetes polares, volcanes, cañones y tiempo meteorológico.'
        
        />

        <Props 
          imagen='https://www.infobae.com/new-resizer/HjIWC7qiLGwtLFh3vbsAxGiM0ik=/1200x1200/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/21174712/MERCURIO.jpg'
          titulo='El golpeado Mercurio' 
          texto='Mercurio es uno de los cuatro planetas rocosos o sólidos; es decir, tiene un cuerpo rocoso, como la Tierra. Este planeta es el más pequeño de los cuatro, con un diámetro de 4879 km en el ecuador. Mercurio está formado aproximadamente por un 70 % de elementos metálicos y un 30 % de silicatos.'
        
        />

        <Props 
          imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ak145o-jgJt7XYoAl_os024ee7NFhGobq0mD9c6W2Q&s'
          titulo='Nuestro ardido Venus' 
          texto='Es un planeta terrestre: es pequeño y rocoso. Su atmósfera es densa: atrapa el calor y por eso es tan caluroso. Tiene una superficie activa, que incluye volcanes. Gira en dirección contraria a la Tierra y la mayoría de los planetas.'
        
        />

        <Props 
          imagen='https://media.ambito.com/p/c2a6764457a7b95491fa0cefc87fd47f/adjuntos/239/imagenes/040/698/0040698928/saturn-67671_1280jpg.jpg'
          titulo='El gigante de los anillos' 
          texto='Es un gigante de gas, como Júpiter. Está compuesto por hidrógeno y helio, sobre todo. Tiene una atmósfera densa. Cuenta con un precioso grupo de siete anillos separados por espacio entre ellos.'
        
        />

        <Api />

    </div>
  );
}

export default App;
