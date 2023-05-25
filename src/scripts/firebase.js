import { db } from "../../firebase.config";
import {
  ref,
  update,
  push,
  child,
  onValue,
  remove,
  get,
} from "firebase/database";
import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';


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
  const { toUser, onNotificationReceived } = props;

    // useEffect(() => {
  const starCountRef = ref(db, toUser);
  onValue(
    starCountRef,
    (snapshot) => {
      const data = snapshot.val();
      if (data){
        const values = Object.values(data);
        const lastValue = values[values.length - 1];
        console.log(lastValue);
        onNotificationReceived(lastValue);
        // toast.info(lastValue); // Show a toast notification with the last value
      }

    },
    (error) => {
      console.log("Error fetching notification:", error);
    }
  );
  
  // }, [toUser]);
  return null; 
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

// WorkSpace

export function AddUpdateWorkspace(props) {
  const { key, jsonString } = props;

  const date = new Date();
  const timeString = date.toLocaleTimeString();
  const postData = {
    jsonString: jsonString,
    LastLogin: timeString,
  };

  const updates = {};
  updates["/" + "workspace" + "/" + key] = postData;
  update(ref(db), updates);
}

export function GetUserWorkspace(props) {
  const { key } = props;
  const dbRef = ref(db);
  get(child(dbRef, "workspace/" + key))
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

//  NFT

export function AddNFT(props) {
  const { address, token, url, metadata, attribute, list } = props;

  const postData = {
    token: token,
    url: url,
    metadata: metadata,
    attribute: attribute,
    list: list,
  };

  const updates = {};
  updates["/" + "NFT" + "/" + address] = postData;
  update(ref(db), updates);
}

export function getNFTs(props) {
  const { address } = props;
  const dbRef = ref(db);
  get(child(dbRef, "NFT/" + address))
    .then((snapshot) => {
      if (snapshot.exists()) {
		console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


export function getAllNFTs() {
  const dbRef = ref(db);
  get(child(dbRef, "NFT/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
		console.log(snapshot.val());
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
