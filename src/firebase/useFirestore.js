import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import  { useEffect, useState } from 'react'
import { db } from './config'

const useFirestore = (collectionName = 'gallery') => {
  const [documents, setdocuments] = useState([])

  useEffect( ()=>{
    const q = query(
      collection(db, collectionName),
      orderBy('timestamp', 'desc')
    )
    const unsubscribe = onSnapshot(q, (snapShot)=>{
        const docs= []
        snapShot.forEach(doc=>{
          docs.push({id:doc.id, data: doc.data()})
        })
        setdocuments(docs)

    }, (error)=>{

      alert(error.message)
      console.log(error)
    })
    
    return()=>unsubscribe()
  }, [collectionName])

  return{documents}
}

export default useFirestore
