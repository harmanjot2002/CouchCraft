const fetchData = async (
  { url, method = 'POST', token = '', body = null },
  dispatch
) => {
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
  body = body ? { body: JSON.stringify(body) } : {};
  try {
    const response = await fetch(url, { method, headers, ...body });
    const data = await response.json();

    if (!response.ok || !data.success) {
      // Handle error cases
      const errorMessage = data.message || 'Server error';
      throw new Error(errorMessage);
    }

    return data.result;
  } catch (error) {
    // Handle fetch or other errors
    dispatch({
      type: 'UPDATE_ALERT',
      payload: { open: true, severity: 'error', message: error.message },
    });
    console.log('Server error:', error);

    if (error.response) {
      console.log('Server response:', error.response.data);
    } else {
      console.log('No response received from the server');
    }

    return null;
  }
};

export default fetchData;
