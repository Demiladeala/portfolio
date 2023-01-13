import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Projectscard from "../components/Projectscard";
import Card from "../components/Card";

const Projects = (props) => {
    const cards = projectscard.map(item =>{
        return(
            <Card 
              key ={item.id}
              img ={item.image}
              name ={item.name}
              description ={item.description}
              logo ={item.logo}
              language ={item.language}
            />
        )
      })



    const projectName = 'WELCOME TO MY WORLD/>';

    return ( 
        <div>
            <header>
                <title>Oluwademilade Ala - Portfolio</title>
                <link rel='icon' href='favicon.ico'/>
            </header>
          <section className="text-white  items-center justify-center">
                <div className="text-white">
                    <h1 className="text-center italic text-xl mt-12 mb-8">{projectName}</h1>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3">
                    {cards}
                </div>
          </section>
        </div>
     );
}
 
export default Projects;
