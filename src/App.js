
import './App.css';
import React from 'react';
import FullName from './profile/component/FullName';
import Profession from './profile/component/Profession';
import Bio from './profile/component/Bio';
import Photo from './me.jpg';

function App() {
  let msg = "hi!!!"
   const alertMe=()=> {
     alert(msg)
   }

  return (
    <div className="App">
      <div >
<FullName FullName="JAAFOURA MARWA" alertMe={alertMe}>
  <div className='imag'>
<img src= {Photo} alt="prof"/>
</div>
</FullName> 
      </div>
      <div>
<Bio Bio="bio"
     Date="11/07/1990 in Monastir"
     Adress="ElAgba Monastir 5000"
     Mobile="+21650149019"
     Mail="jaafouramarwa@gmail.com"
     Train="Actually, i study in Go MY CODE training center (full stack Java Script)to be future developper web.
     in 2013 I obtained my higher education diploma in commercial management within Institut Supérieur des Métiers de la Mode de Monastir and in 2010 I got my science baccalaureate diploma"
     ></Bio>  
      </div>
      <div>
<Profession Profession="Profession"
Experrience1="Mars 2016/2015 I was employed as an administrative agent such as file follow-up, customer reception, mailing, financial management..."
Experrience2="in 2013, I did an end-of-studies internship project at the company SANCELLA."
Experrience3="Summer 2011/2012/2013 when I was a student I worked as a secretary in a driving school during the summer such as welcoming customers, giving courses in the highway code..."


></Profession>
      </div>
    </div>
  );
}



export default App;
