import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const InfoCard = ({userInfo}) =>{

 const profileInfo = userInfo.profile;

  return(
    <div>
       <Collection header='Personal Information'>
         <CollectionItem>{profileInfo.name, profileInfo.last_name}</CollectionItem>
         <CollectionItem>{`${profileInfo.state}, ${profileInfo.country}`}</CollectionItem>
         <CollectionItem>{profileInfo.alma_mater}</CollectionItem>
          <CollectionItem>{`GPA: ${profileInfo.GPA}`}</CollectionItem>
         <CollectionItem>{`TOEFL: ${profileInfo.toefl}, IELTS: ${profileInfo.ielts}, SAT: ${profileInfo.sat}`}</CollectionItem>
       </Collection>

    </div>
  );
}

export default InfoCard;
