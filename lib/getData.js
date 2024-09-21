export async function getData(endpoint) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/${endpoint}`, {
        cache: 'force-cache',
      });
      if (!response.ok) {
        // console.error(`Error: Received status ${response.status} for ${endpoint}`);
        // Return empty data in case of a 404 or other errors
        return [];
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }