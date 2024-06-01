// import Button from './component/button'
  

function Display(){
  const ipl=[
    {
      team:'KKR',
      players:['Salt(wk)','Narain','Nthish','Venkatesh','Shreyas(c)','Russel','Rinku','Ramandeep','Starc','Varun','harshith'],
    },
    {
      team:'RCB',
      players:['kohli','faf(c)','max','patidhar','green','dk(wk)','lomror','karan','ferguson','dayal','siraj'],
    },
    {
      team:'SRH',
      players:['head','abhishek','tripati','nithish','markram','klassen(wk)','samadh','shabas','pat(c)','bhuvneshwar','natrajan']
    }

  ]
    

  return (
    <div>
      <div>
      {ipl.map((value)=>{
        return(
          <div>
            <h1 style={{
              color:'red',
              backgroundColor:'black',
            }}>{value.team}</h1>
            <ol>
            {value.players.map((na)=>{
              return(
                
                  <li>{na}</li>
                
              )
            })}
          </ol>
          </div>
        )
      })}
      </div>
      <div>
        <table>
      {ipl.map((value)=>{
        return(
          <div>
            
            <th>{value.team}</th>
            <tr>
            {value.players.map((na)=>{
              return(
                
                  <td>{na}</td>
                
              )
            })}
          </tr>
          
          </div>
        )
      })}
      </table>
      </div>
    

    </div>
    




  )

}
export default Display