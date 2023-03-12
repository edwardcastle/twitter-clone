export default () => {
  const useAuthToken = () => useState("auth_token");
  const userAuthUser = () => useState("auth_user");

  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser) => {
    const authUser = userAuthUser();
    authUser.value = newUser;
  };

  const login = ({ username, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/login", {
          method: "POST",
          body: {
            username,
            password,
          },
        });
        setToken(data.access_token);
        setUser(data.user);
        console.log(data);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const refreshToken = () =>{
    return new Promise(async(resolve, reject)=>{
        try{
            const data = await $fetch('/api/auth/refresh')
            setToken(data.access_token)
        }
        catch(error) {
            reject(error)
        }
    })
  }

  const initAuth = () => {
    return new Promise((resolve, reject) => {
        try{
            await refreshToken
        }
    });
  };

  return { login, userAuthUser };
};
