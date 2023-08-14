"use client";

import { useAppDispatch } from '@/redux/hooks';
import { useGetUsersQuery } from '@/redux/services/userApi';
import React from 'react'

const Page = () => {
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div>
      {error ? (
        <p>Error Occured</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
            <div className="grid grid-cols-4 gap-20 px-5 py-5">
              {data.map((user) => (
                <div
                  key={user.id}
                  className="border border-gray-300 text-center p-4"
                >
                  <img
                    src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                    alt={user.name}
                    className="h-48 w-48 mx-auto"
                  />
                  <h3 className="mt-2">{user.name}</h3>
                </div>
              ))}
            </div>
      ) : null}
    </div>
  )
}

export default Page