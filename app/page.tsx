import Image from 'next/image'
import Link from 'next/link'

async function getCountries(){
  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json();
  return countries
}

export type Country ={ 
  name:{
    common:string
  };
  traslations:{
    por:{
      common:string
    }
  }
  flags:{
    svg:string;
    alt:string;
  }

}





export default async function Home() {
  const countries = await getCountries();
 
  return (
    <main className='bg-gray-200 pr-4 pl-4 '>
      <h1 className='flex justify-center font-bold'>Lista de Paises</h1>
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full  mt-16' >
    {countries.map((country)=>(
      <article className='h-60 min-w-full p-2 bg-white border-2 rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl ' key={country.name.common} >
        <Link href={`/pais/${country.name.common}`}>
          <div className='relative w-full h-40 p2 overflow-hidden rounded-xl '>
        <Image src={country.flags.svg} alt={country.flags.alt} className='object-cover border' fill/>

          </div>
          <h1 className='flex justify-center font-bold'>{country.translations.por.common}</h1>
        </Link>
      </article>
    ))};
    </section>
    </main>
  )
}
