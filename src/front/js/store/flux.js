const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("session-token")
		},
		actions: {
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			
			login: async (email, password) => {
				try{
					const response = await fetch(process.env.BACKEND_URL + 'api/login', {
						method: "POST", 
						body: JSON.stringify({email, password}),
						headers: {
						  "Content-Type": "application/json",
						},
					  })

					  const data = await response.json()
					  localStorage.setItem("session-token", data.token)
					  setStore({token: data.token})
					  
				
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
	
		}
	};
};

export default getState;
