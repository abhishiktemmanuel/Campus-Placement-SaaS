import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userData = {
        providerData: user.providerData.map((profile) => ({
          providerId: profile.providerId,
          uid: profile.uid,
          displayName: profile.displayName,
          email: profile.email,
          photoURL: profile.photoURL,
        })),
      };
      setCurrentUser(userData);
    }
  }, []);
  console.log(currentUser);

  return currentUser;
};

export default useCurrentUser;
