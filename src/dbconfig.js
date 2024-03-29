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
  deleteDoc,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";
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
export const storage = getStorage(app);
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
      username: additionalInfo.username,
      email: userData.email,
      userStatus: additionalInfo.userStatus,
    };

    try {
      await setDoc(docRef, userInfo);
      return docRef;
    } catch (error) {
      console.log(error.message);
    }
  }
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
  const docRef = doc(db, "user", data.id);

  await updateDoc(docRef, data)
    .then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
  return docRef;
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
      imageUrls,
      totalFlat,
      commonFacilities,
      flatAvailable,
      totalOffice,
      officeAvailable,
      totalShop,
      shopAvailable,
      pdfUrls,
      statusUrls,
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
      imageUrls,
      totalFlat,
      commonFacilities,
      flatAvailable,
      totalOffice,
      officeAvailable,
      totalShop,
      shopAvailable,
      statusUrls,
      pdfUrls
    };
    try {
      await setDoc(docRef, projectInfo);
    } catch (error) {
      console.log(error.message);
    }
  }
  return docRef;
};

export const deleteProject = async (id) => {
  const docRef = await doc(db, "project_details", id);
  await deleteDoc(docRef);
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
  console.log(id);
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
      preferredProject,
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
      preferredProject,
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
// // create document for Project Details form
export const createDocumentsForClientProjectInfo = async (data) => {
  console.log(data);

  const docRef = await doc(db, "client_project_info", uuidv4());
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    const {
      id,
      projectName,
      land,
      foundation,
      address,
      refference,
      projjectid,
      floor,
      unit,
      rate,
      aptPrice,
      parkingPrice,
      utility,
      totalPrice,
      totalPriceInWord,
      monthlyInstallment,
      noInstallment,
      paymentMethod,
      paymentMode,
      bookingMoney,
      downPayment,
      bankName,
      bookingDate,
      downPaymentDate,
      dueAmount
    } = data;

    const projectInfo = {
      clientId: id,
      projectName,
      land,
      foundation,
      address,
      refference,
      projjectid,
      floor,
      unit,
      rate,
      aptPrice,
      parkingPrice,
      utility,
      totalPrice,
      totalPriceInWord,
      monthlyInstallment,
      noInstallment,
      paymentMethod,
      paymentMode,
      bookingMoney,
      downPayment,
      bankName,
      bookingDate,
      downPaymentDate,
      dueAmount
    };
    try {
      await setDoc(docRef, projectInfo);
    } catch (error) {
      console.log(error.message);
    }
  } else {
    console.log("The product is exist");
  }
  return docRef;
};

// get all land owner
export const getAllClientProjects = async (id) => {
  console.log(id);
  let projectData = [];
  const docRef = await getDocs(collection(db, "client_project_info"));
  const q = query(docRef, where("clientId", "==", id));

  q.forEach((doc) => {
    projectData.push({ ...doc.data(), id: doc.id });
  });
  return projectData;
};

export const getSingleUserInfoBySlug = async (location, slug) => {
  const citiesRef = collection(db, location);
  // Create a query against the collection.
  const q = query(citiesRef, where("userStatus", "==", slug));
  const querySnapshot = await getDocs(q);
  let details = [];
  await querySnapshot.forEach((doc) => {
    details.push(doc.data());
  });
  return details;
};
// get individual client projects
export const getIndividualClientProjectInfo = async (location, slug) => {
  const citiesRef = collection(db, location);
  // Create a query against the collection.
  const q = query(citiesRef, where("clientId", "==", slug));
  const querySnapshot = await getDocs(q);
  let details = [];
  await querySnapshot.forEach((doc) => {
    details.push({ ...doc.data(), id: doc.id });
  });
  return details;
};

export const getIndividualProjectInfoForPayment = async (location, id) => {
  const citiesRef = collection(db, location);
  // Create a query against the collection.
  const q = query(citiesRef, where("projjectid", "==", id));

  const querySnapshot = await getDocs(q);
  let details = {};
  await querySnapshot.forEach((doc) => {
    details = { ...doc.data(), id: doc.id };
  });
  return details;
};

export const getIndividualProjectInfoForClient = async (location, id) => {
  const docRef = await doc(db, location, id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const updateIndividualProjectInfoForClient = async (data) => {
  
  const docRef = doc(db, "client_project_info", data.id);
  
  const obj = {
    dueAmount : data.dueAmount
  }
  updateDoc(docRef, obj)
    .then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

// create document for Project Details form
export const createDocumentsForClientPaymentTransaction = async (data) => {
  const docRef = await doc(db, "client_transaction", uuidv4());
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    try {
      await setDoc(docRef, data);
    } catch (error) {
      console.log(error.message);
    }
  } else {
    console.log("The product is exist");
  }
  return docRef;
};

// get all land owner
export const getClientAllTransactions = async (id) => {
  let transactions = [];
  const docRef = await getDocs(collection(db, "client_transaction"));
  docRef.forEach((doc) => {
    transactions.push({ ...doc.data(), id: doc.id });
  });
  return transactions;
};

export const getIndividualProjectTransactions = async (id) => {
  const citiesRef = collection(db, "client_transaction");
  // Create a query against the collection.
  const q = query(citiesRef, where("projectId", "==", id));
  const querySnapshot = await getDocs(q);
  let details = [];
  await querySnapshot.forEach((doc) => {
    details.push({ ...doc.data(), id: doc.id });
  });
  return details;
};