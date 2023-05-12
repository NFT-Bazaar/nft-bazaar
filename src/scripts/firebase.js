import { db } from "../../firebase.config";
import { ref, update, push, child, onValue, remove, get } from "firebase/database";
import React, { useState, useEffect } from "react";


export function SendOffer(props) {
  const { Nftaddress_1, Nftaddress_2, FromUser, toUser } = props;

  const postData = {
    nft_1: Nftaddress_1,
    nft_2: Nftaddress_2,
    from_user: FromUser,
  };

  // Generating a new key using push() and child() functions to create a new child node under the given user
  const newNftKey = push(child(ref(db), toUser)).key;

  const updates = {};
  updates["/" + toUser + "/" + newNftKey] = postData;
  update(ref(db), updates);
}

export function ReceiveNotification(props) {
  const { toUser } = props;

//   useEffect(() => {
    const starCountRef = ref(db, toUser);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const values = Object.values(data);
      const lastValue = values[values.length - 1];
	  console.log(lastValue);
	//   return lastValue;
    }, (error) => {
		console.log("Error fetching notification:", error);
	  });
	// }, [toUser]);
}

export function RemoveOffer(props) {
  const { toUser, offerID } = props;
  return remove(ref(db, toUser + "/" + offerID), {})
    .then(() => {
      console.log("Offer removed successfully");
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getUserData(props) {
  const { User } = props;
  const dbRef = ref(db);
  get(child(dbRef, User))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
