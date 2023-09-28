import type {Country} from '@/app/page';
import Link from 'next/link';
import Image from 'next/image';
async function getCountryByName(name:string):Promise<Country>{
 const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
 return (await response.json())[0];
}

export default async function CountryPage({params:{name},}:{params:{name:string};})

{const country = await getCountryByName(name)
    
    const formatter = Intl.NumberFormat("en",{notation:"compact"}) 
    return(<>
         
     <h1 className='text-5xl text-center font-bold text-gray-800 my-16'>{country.name.common}</h1> 
     <article className="flex md:flex-row flex-col justify-between min-w-full p-10 bg-gradient-to-r from-cyan-500 to-blue-500 container">
    <section>
   {country.capital && ( <h2 className="font-bold text-xl  text-gray-800">🏙 Capital:{country.capital}</h2>)}
     <h2 className="font-bold text-xl  text-gray-800">🗺 Continente:{country.region}-{country.subregion}</h2>
      <h2 className="font-bold text-xl bg-gray-200 rounded-xl text-gray-800">👨‍👩‍👧‍👦 População:{formatter.format(country.population)}</h2>
      
    </section>
        <div className="relative  md:h-auto  order-first md:order-last">
        <Image src={country.flags.svg}alt={country.alt} height={250} width={200} className=' object-cover'/>
        </div>
     </article>
       
     <Link href="/" className='text-2xl  relative  pt-10'>↚ Voltar</Link>
    </>
           
    )
}