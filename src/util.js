import React from 'react';

export const sortByKeyValue = (data, key) => {
  const dataCopy = [...data]

  if (key) {
    return dataCopy.sort(function (a, b) {
      return a[key] - b[key];
    });
  } else {
    return dataCopy
  }
}

