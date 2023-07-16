export default function promiseSample() {
  const url = "https://api.github.com/users/Kouta-N";

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const fetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          res
            .json()
            .then((json: Profile) => {
              console.log("Asynchronous Callback Sample 1:", json);
              resolve(json);
            })
            .catch((error) => {
              console.error(error);
              reject(null);
            });
        })
        .catch((error) => {
          console.error(error);
          reject(null);
        });
    });
  };

  fetchProfile()
    .then((profile) => {
      if (profile) {
        console.log("Asynchronous Callback Sample 2:", profile);
      }
    })
    .catch(() => {});
}
