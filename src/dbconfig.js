import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { v4 as uuidv4 } from "uuid";

import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { useContext } from "react";
import { Store } from "./Context/context";
import { getDatabase, ref, onValue } from "firebase/database";
import { getMessaging, getToken } from "firebase/messaging";

export const firebaseConfig = {
  apiKey: "AIzaSyCfiuOVtjiuKmVyYCHWT80IfsEUJDxceYE",
  authDomain: "mahmudbuilders-a304f.firebaseapp.com",
  projectId: "mahmudbuilders-a304f",
  storageBucket: "mahmudbuilders-a304f.appspot.com",
  messagingSenderId: "49221518420",
  appId: "1:49221518420:web:ec12caabb0af9b8fd6d9c1",
  measurementId: "G-BD85ZG506Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Firebase Cloud Messaging (FCM)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
// google popup login
export const signinWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
export const db = getFirestore();
//create document for user
export const createDocuments = async (userData, additionalInfo) => {
  const docRef = await doc(db, "user", userData.uid);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    const userInfo = {
      username: userData.displayName ? userData.displayName : additionalInfo.username,
      email: userData.email,
      userStatus:additionalInfo.userStatus
    };
    try {
      await setDoc(docRef, userInfo);
    } catch (error) {
      console.log(error.message);
    }
  }
  return  docRef;
};

// create user with email and password
export const createUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
// login user with email and password
export const loginUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
// auth listenner
export const authListener = async (callback) => {
  return await onAuthStateChanged(auth, callback);
};
// auth signout
export const authSignout = async () => {

  return await signOut(auth);
};
// get individual user
// export const getUsers = async () => {
//   const { currentUser } = useContext(Store);
//   const docRef = doc(auth, "user", currentUser.uid);
//   return await getDoc(docRef);
// };
// get all users
export const getAllUsers = async () => {
  let userData = [];
  const docRef = await getDocs(collection(db, "user"));
  docRef.forEach((doc) => {
    userData.push({ ...doc.data(), id: doc.id });
  });
  return userData;
};

export const getUserInfo = async () => {};

//get individual user
export const getCurrentUser = async (id) => {
  const docRef = await doc(db, "user", id);
  const docSnap = await getDoc(docRef);
  return { ...docSnap.data(), id: docSnap.id };
};

// update individual user
export const updateIndividualUser = async (data) => {
  console.log(data);
  const docRef = doc(db, "user", data.id);
  updateDoc(docRef, data)
    .then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

// get Home about
export const getHomeAbout = async () => {
  let aboutData = [];
  const docRef = await getDocs(collection(db, "home_about"));
  docRef.forEach((doc) => {
    aboutData.push({ ...doc.data(), id: doc.id });
  });
  return aboutData;
};
// // create document for Home about form
export const createDocumentsForHomeAbout = async (data) => {
  const docRef = await doc(db, "home_about", uuidv4());
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    const {
      title,
      subTitle,
      heading,
      headingStyledText,
      subHeading,
      listText1,
      listText2,
      listText3,
      listText4,
      details,
      setisfiedCount,
      buttonText,
    } = data;
    const aboutInfo = {
      title,
      subTitle,
      heading,
      headingStyledText,
      subHeading,
      listText1,
      listText2,
      listText3,
      listText4,
      details,
      setisfiedCount,
      buttonText,
    };
    try {
      await setDoc(docRef, aboutInfo);
    } catch (error) {
      console.log(error);
    }
  }
  return docRef;
};
// update home about data
export const updateHomeAbout = async (data) => {
  const docRef = doc(db, "home_about", data.id);

  updateDoc(docRef, data)
    .then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

// get Home choose
export const getHomeChoose = async () => {
  let chooseData = [];
  const docRef = await getDocs(collection(db, "home_choose"));
  docRef.forEach((doc) => {
    chooseData.push({ ...doc.data(), id: doc.id });
  });
  return chooseData;
};
// // create document for Home about form
export const createDocumentsForHomeChoose = async (data) => {
  const docRef = await doc(db, "home_choose", uuidv4());
  const snapshot = await getDoc(docRef);
  console.log(data, "create");
  if (!snapshot.exists()) {
    const { cheading, cdetails } = data;
    const chooseInfo = {
      heading: cheading,
      details: cdetails,
    };
    try {
      await setDoc(docRef, chooseInfo);
    } catch (error) {}
  }
  return docRef;
};
// update home about data
export const updateHomeChoose = async (data) => {
  console.log(data);
  const docRef = doc(db, "home_choose", data.id);
  updateDoc(docRef, data)
    .then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
// get individual choose
export const getIndividualChoose = async (id) => {
  const docRef = await doc(db, "home_choose", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
// // create document for category form
export const createDocumentsForCategory = async (data) => {
  const docRef = await doc(db, "project_category", uuidv4());
  const snapshot = await getDoc(docRef);
  console.log(data, "create");
  if (!snapshot.exists()) {
    const { categoryName, categoryType, categoryDetails } = data;
    const catInfo = {
      categoryName,
      categoryType,
      categoryDetails,
    };
    try {
      await setDoc(docRef, catInfo);
    } catch (error) {}
  }
  return docRef;
};
// get all category
export const getAllCategory = async () => {
  let categoryData = [];
  const docRef = await getDocs(collection(db, "project_category"));
  docRef.forEach((doc) => {
    categoryData.push({ ...doc.data(), id: doc.id });
  });
  return categoryData;
};
// // create document for Project Details form
export const createDocumentsForProjectDetails = async (data) => {
  const docRef = await doc(db, "project_details", uuidv4());
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    const {
      address,
      category,
      details,
      estimatedCompletionDate,
      flatSize,
      landArea,
      launchDate,
      location,
      numberofBuildingBlocks,
      numberofFloor,
      projectType,
      rajukApprovalNo,
      rajukpprovalDate,
      status,
      subTitle,
      title,
      slug,
    } = data;

    const projectInfo = {
      title,
      address,
      category,
      details,
      estimatedCompletionDate,
      flatSize,
      landArea,
      launchDate,
      location,
      numberofBuildingBlocks,
      numberofFloor,
      projectType,
      rajukApprovalNo,
      rajukpprovalDate,
      status,
      subTitle,
      slug,
    };
    try {
      await setDoc(docRef, projectInfo);
    } catch (error) {
      console.log(error.message);
    }
  }
  return docRef;
};
// get all category
export const getAllProjects = async () => {
  let projectData = [];
  const docRef = await getDocs(collection(db, "project_details"));
  docRef.forEach((doc) => {
    projectData.push({ ...doc.data(), id: doc.id });
  });
  return projectData;
};
// Get Single Category Flats
// Create a reference to the cities collection
export const getSingleCategory = async (location, category) => {
  const citiesRef = collection(db, location);
  // Create a query against the collection.
  const q = query(citiesRef, where("category", "==", category));
  const querySnapshot = await getDocs(q);
  let abc = [];
  querySnapshot.forEach((doc) => {
    abc.push(doc.data());
  });
  return abc;
};
export const getSingleCategorySingleDetails = async (location, slug) => {
  const citiesRef = collection(db, location);
  // Create a query against the collection.
  const q = query(citiesRef, where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  let details = {};
  await querySnapshot.forEach((doc) => {
    details = doc.data();
  });
  return details;
};
// get individual user
export const getIndividualCategoryFlat = async (id) => {
  const docRef = await doc(db, "project_details", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
// update home about data
export const updateIetIndividualCategoryFlat = async (data) => {
  console.log(data);
  const docRef = doc(db, "project_details", data.id);
  updateDoc(docRef, data)
    .then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
//create after sale service messege from customer
export const createDocumentsForAfterSale = async (data) => {
  const docRef = await doc(db, "after_sale", uuidv4());
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    const {
      apartmentName,
      category,
      clientsName,
      details,
      email,
      mobile,
      projectName,
    } = data;
    const projectInfo = {
      apartmentName,
      category,
      clientsName,
      details,
      email,
      mobile,
      projectName,
    };
    try {
      await setDoc(docRef, projectInfo);
    } catch (error) {
      console.log(error.message);
    }
  }
  return docRef;
};
// get all after sale
export const getAllAfterSale = async () => {
  console.log("yes");
  let projectData = [];
  const docRef = await getDocs(collection(db, "after_sale"));
  docRef.forEach((doc) => {
    projectData.push({ ...doc.data(), id: doc.id });
    console.log(doc.data());
  });
  return projectData;
};
// get individual user
export const getIndividualAfterSaleMessage = async (id) => {
  const docRef = await doc(db, "after_sale", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
// // create document for land owner form
export const createDocumentsForLandOwner = async (data) => {
  const docRef = await doc(db, "land_owner", uuidv4());
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    const {
      landAddress,
      landSize,
      roadWidth,
      landCategory,
      facingOfLand,
      attractiveFeatures,
      landOwnerName,
      contactPerson,
      contactNumber,
      email,
    } = data;

    const projectInfo = {
      landAddress,
      landSize,
      roadWidth,
      landCategory,
      facingOfLand,
      attractiveFeatures,
      landOwnerName,
      contactPerson,
      contactNumber,
      email,
    };
    try {
      await setDoc(docRef, projectInfo);
    } catch (error) {
      console.log(error.message);
    }
  }
  return docRef;
};
// get all land owner
export const getAllLandOwner = async () => {
  let projectData = [];
  const docRef = await getDocs(collection(db, "land_owner"));
  docRef.forEach((doc) => {
    projectData.push({ ...doc.data(), id: doc.id });
    console.log(doc.data());
  });
  return projectData;
};
// get individual user
export const getIndividualLandOwner = async (id) => {
  const docRef = await doc(db, "land_owner", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
// // create document for Project Details form
export const createDocumentsForBuyer = async (data) => {
  console.log(data.expectedHandoverDate.$d);

  const docRef = await doc(db, "buyer", uuidv4());
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    const {
      preferredLocation,
      preferredSize,
      carParkingRequirement,
      expectedHandoverDate: { $d },
      facingOfTheApartment,
      preferredFloor,
      minBedroom,
      minBathroom,
      name,
      profession,
      mobile,
      email,
      address,
    } = data;

    const projectInfo = {
      preferredLocation,
      preferredSize,
      carParkingRequirement,
      expectedHandoverDate: $d,
      facingOfTheApartment,
      preferredFloor,
      minBedroom,
      minBathroom,
      name,
      profession,
      mobile,
      email,
      address,
    };
    try {
      await setDoc(docRef, projectInfo);
    } catch (error) {
      console.log(error.message);
    }
  }
  return docRef;
};
// get all land owner
export const getAllBuyer = async () => {
  let projectData = [];
  const docRef = await getDocs(collection(db, "buyer"));
  docRef.forEach((doc) => {
    projectData.push({ ...doc.data(), id: doc.id });
    console.log(doc.data());
  });
  return projectData;
};
// get individual user
export const getIndividualBuyerMessage = async (id) => {
  const docRef = await doc(db, "buyer", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
// // create document for Project Details form
export const createDocumentsForContactUs = async (data) => {
  console.log(data);

  const docRef = await doc(db, "contact_us", uuidv4());
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    const { name, mobile, email, subject } = data;

    const projectInfo = {
      name,
      mobile,
      email,
      subject,
    };
    try {
      await setDoc(docRef, projectInfo);
    } catch (error) {
      console.log(error.message);
    }
  }
  return docRef;
};
// get all land owner
export const getAllContactus = async () => {
  let projectData = [];
  const docRef = await getDocs(collection(db, "contact_us"));
  docRef.forEach((doc) => {
    projectData.push({ ...doc.data(), id: doc.id });
    console.log(doc.data());
  });
  return projectData;
};
// get individual user
export const getIndividualContactus = async (id) => {
  const docRef = await doc(db, "contact_us", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
