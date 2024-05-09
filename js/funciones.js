const heros=[
    {nombre:'Wonder Woman',
    fecha:'12/1941',
    imagen:'img/wonderwoman.webp',
    descripcion:'Además de ser la embajadora de las amazonas hacia el resto del mundo, Mujer Maravilla posee estupendas habilidades y dones superhumanos concedidos a ella por los dioses griegos en su victoria. Entre ellos se incluyen un lazo mágico que obliga a decir la verdad hace perder la memoria y es indestructible.',
    franquisia:'DC'
    },
    {nombre:'Ant-Man',
    fecha:'01/1962',
    imagen:'img/antman.webp',
    descripcion:'Es un ladrón reformado y un experto en electrónica. Fue miembro de Los Vengadores, Los 4 Fantásticos y los Guardianes de la Galaxia, un personaje principal de la serie de cómics FF, y en 2015 se convirtió en el personaje principal de la serie Ant-Man. Intelecto de nivel de genio.',
    franquisia:'Marvel'
    },
    {nombre:'Flash',
    fecha:'01/1940',
    imagen:'img/flash.jpg',
    descripcion:'Flash (también conocido por su apodo "El Velocista Escarlata") es un superhéroe de DC Comics que posee una rapidez sobrehumana, la cual incluye la habilidad de correr a gran velocidad, reflejos sobrehumanos y la capacidad de violar algunas leyes de la física.',
    franquisia:'DC'
    },
    {nombre:'Falcon',
    fecha:'09/1969',
    imagen:'img/falcon.jpg',
    descripcion:'Como el superhéroe Falcon, Wilson usa alas mecánicas para volar, y tiene un control telepático y empático limitado sobre las aves. Tras la jubilación de Steve Rogers y Sam se convierte en el nuevo Capitán América y líder de Los Vengadores.',
    franquisia:'Marvel'
    },
    {nombre:'Green-Arrow',
    fecha:'09/1941',
    imagen:'img/greenarrow.jpg',
    descripcion:'Green Arrow es un héroe que no solo lucha por la justicia, sino también por el amor y la familia. Su historia nos muestra que se puede ser un superhéroe sin renunciar a tener una vida personal plena y feliz. Y que se puede tener una familia numerosa y diversa sin perder la cohesión y el respeto.',
    franquisia:'DC'
    },
    {id:'12345',
    nombre:'Spiderman',
    fecha:'',
    imagen:'img/spiderman.png',
    descripcion:'Científico, vigilante, profesor, fotógrafo, superhéroe. Fuerza, velocidad, durabilidad, agilidad, sentidos, reflejos, coordinación, equilibrio y resistencia sobrehumanos. Fisiología de la araña: Precognitiva capacidad de sentido arácnido, se aferra a la mayoría de las superficies sólidas y la capacidad de las redes.',
    franquisia:'Marvel'
    }
]

const findHero=(id)=>{
    return new Promise((resolve,reject)=>{
        const hero=heros.find(hero => hero.id ===id);
        if(hero){
            resolve(hero);
            return;
        }
        reject(`Hero con nombre ${id} no fue encontrado...`)
    });
    return Promise;
}
const id='12345'

const viewHero=(hero)=>{
    console.log(hero);
}
const viewError =(error)=>{
    console.log(error);
}
findHero(id)
    .then(viewHero)
    .catch(viewError);

