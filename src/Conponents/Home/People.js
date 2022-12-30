import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../Shared/Loading/Loading';

const People = () => {
    // const { user,  } = useContext(AuthContext);
    // const { data, isLoading } = useQuery({
    //     queryKey: ["userEmail"],
    //     queryFn: async () => {
          
    //       const res = await fetch(
    //         `http://localhost:5000/profile?email=${user?.email}`
    //       );
    //       const data = await res.json();
    //       return data;
    //     },
        
    //   });
    //  
    //   if(isLoading){
    //     return<Loading></Loading>
    //   }
    
    return (
        <div>
            
        </div>
    );
};

export default People;