var flights=document.getElementById('cp-flights-form')
flights.addEventListener('submit',function(e){
  e.preventDefault()
  fetch('/flights/viewflight',{
   headers: { 'content-type': 'application/json' },
   method: 'get',
   credentials: 'include',
   body: JSON.stringify({
   airline:airline.value,
   airport:airport.value,
   flight_no:flight_no.value,
   origin: origin.value,
   destination:destination.value,
   departure_time: departure_time.value,
   arrival_time:arrival_time.value,
   gate:gate.value,
   aircraft: aircraft.value,

   })
 })
  .then(res=>res.json())
  .then(res=>{
    if (res.err) {
      swal("Error!", res.err.errMsg, "error");
    }else if(res.rediect){
      window.location=res.rediect
    }
  })
})