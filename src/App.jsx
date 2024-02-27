import React from 'react'
import Cyber from './assets/components/Cyber'
import Fullstack from './assets/components/Fullstack'
import Datascience from './assets/components/Datascience'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Topbar from './assets/components/Topbar'
import { useState } from 'react'
function App() {
  let[data,setdata]=useState([
    {
      name:"datascience",
      description:"Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from potentially noisy, structured, or unstructured data.",
      img:"https://eduguide.co.in/wp-content/uploads/2020/12/data-science...jpg"
    },
    {
      name:"datascience",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://www.bioenergyconsult.com/wp-content/uploads/2020/08/importance-of-data-science.jpg"
    },
    {
      name:"datascience",
      description:"Data analysis focuses on extracting insights and drawing conclusions from structured data, while data science involves a more comprehensive approach that combines statistical analysis, computational methods, and machine learning to extract insights, build predictive models, and drive data-driven decision-making.",
      img:"https://www.american.edu/programs/shared/data-science/images/datascience-og.jpg"
    },
    {
      name:"datascience",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://aptronnoida.in/blog/wp-content/uploads/2021/01/Data-Science-Course-in-Noida.jpg"
    },
    {
      name:"datascience",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/when-to-use-data-science-in-seo-5def8e5b1c22c.png"
    },
    {
      name:"datascience",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://www.nabler.com/wp-content/uploads/2020/05/segmentation-in-data-science.jpg"
    },
    
    {
      name:"datascience",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://wallpapercave.com/wp/wp4748441.jpg"
    },
    {
      name:"fullstack",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-08-14/ba6af840-ddf5-11ea-be91-5fbb68034ee1.jpg"
    },
    {
      name:"fullstack",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"http://developerguru.in/images/courses/full-stack.png"
    },
    {
      name:"fullstack",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png"
    },
    {
      name:"fullstack",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://www.subcodevs.com/wp-content/uploads/2020/02/Full-stack-developer.png"
    },
    {
      name:"fullstack",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://www.credencys.com/wp-content/uploads/2019/04/hire-full-stack-developer1.png"
    },
    {
      name:"fullstack",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://wallpapercave.com/wp/wp11346429.jpg"
    },
    {
      name:"cybersecurity",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://tse1.mm.bing.net/th?id=OIP.KlIwzGCPCzahoAu13UlFTgHaE8&pid=Api&P=0&h=220"
    },
    {
      name:"cybersecurity",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://www.pngplay.com/wp-content/uploads/7/Cybersecurity-Transparent-PNG.png"
    },
    {
      name:"cybersecurity",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://www.cioinsight.com/wp-content/uploads/2021/08/DRL-CME-6721-scaled.jpeg"
    },
    {
      name:"cybersecurity",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://tse3.mm.bing.net/th?id=OIP.NuioSqZIJfAxqR-CB0lOSAHaFj&pid=Api&P=0&h=220"
    },
    {
      name:"cybersecurity",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://www.cybercrimeswatch.com/wp-content/uploads/2016/07/cyber-security.jpg"
    },
    {
      name:"datascience",
      description:"In simpler terms, data science is about obtaining, processing, and analyzing data to gain insights for many purposes. The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.",
      img:"https://wallpaperaccess.com/full/1704555.jpg"
    },

  ])
  return (
   <>
     <BrowserRouter>
     <Topbar  data={data} setdata={setdata}/>
     <Routes>
     <Route path='/datascience' element={<Datascience data={data} setdata={setdata}/>}/>
     <Route path='/Cyber' element={<Cyber data={data} setdata={setdata}/>}/>
     <Route path='/Fullstack' element={<Fullstack data={data} setdata={setdata}/>}/>
     {/* <Route path='/Datascience' element={<Careerer data={data} setdata={setdata}/>}/> */}
    </Routes>
 </BrowserRouter>
    </>
  )
}

export default App