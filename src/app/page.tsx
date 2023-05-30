"use client";

import { decrement, increment, reset } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useGetUsersQuery } from "./redux/services/userApi";
import Image from "next/image";

function Home() {
  const count = useAppSelector((state) => state.counterReducer.value); //value counterSlice
  const dispatch = useAppDispatch(); //function counterSlice

  //state default redux, isloading, idfetching, data, error
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null); //value get api state create for readux
  if (isLoading || isFetching) return <p>loading...</p>; //for api
  if (error) return <p>some error</p>; //for api

  return (
    <>
      <h4 className="text-center mb-3">{count}</h4>
      
      <div className="flex justify-center gap-x-2">
        <button className="bg-green-200 px-3 py-2 rounded-md"
        onClick={() => dispatch(increment())}>
          increment
        </button>

        <button className="bg-red-400 px-3 py-2 rounded-md"
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>

        <button className="bg-blue-400 px-3 py-2 rounded-md"
        onClick={() => dispatch(reset())}>
          reset
          </button>

      </div>

      <div className="grid grid-cols-3 mx-auto gap-3">
        {error ? (
          <p>some error</p>
        ) : isLoading || isFetching ? (
          <p>loading...</p>
        ) : (
          data?.map((user) => (
            <div key={user.id} className="bg-gray-500 p-4">
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                className="mx-auto"
                height={180}
                width={180}
              />
              <p className="text-center font-bold mt-4">{user.name}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;
