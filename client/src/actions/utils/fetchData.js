const fetchData = async (
  { url, method = 'POST', token = '', body = null },
  dispatch 
) => {
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    console.log('Response Status:', response.status);
    
    // Read the response text only once
    const responseBody = await response.text();
    console.log('Response Text:', responseBody);

    if (!response.ok) {
      if (response.status === 401) {
        dispatch({ type: 'UPDATE_USER', payload: null });
      }
      const errorData = JSON.parse(responseBody); // Parse the text to JSON
      throw new Error(errorData.message);
    }

    const data = JSON.parse(responseBody); // Parse the text to JSON
    return data.result;
  } catch (error) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: { open: true, severity: 'error', message: error.message },
    });
    console.error(error);
    return null;
  }
};

export default fetchData;
