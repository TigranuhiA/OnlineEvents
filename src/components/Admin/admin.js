import React from "react";
import {baseUrl} from "../../api/api";
import axios from "axios";
import {useState, useEffect} from "react";

const Admin = () => {
    const [events, setEvents] = useState([])
  
    useEffect(() => {

        axios.get(`${baseUrl}/events`)
        .then(res => {
          if (res.status < 200 || res.status >= 300) {
              throw new Error()
          }
          return res
      })
      .then(res => {
          setEvents(res)
      })
    }, [])
  

    return (
    
      events.map(e => {
                      return (
                          <React.Fragment key={e.id}>
                              <hr style={{
                                  width: '50%',
                              }}/>
                              <div>
                                  <p>id {e.id}</p>
                                  <p>phone: {e.phone}</p>
                                  <button>edit</button>
                                  <button>delete</button>
                              </div>
                               </React.Fragment>
                      )})
)  
}
  
  export default Admin