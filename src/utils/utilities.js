export const dateCompare = (i1, i2) => {
    return +i2.id - +i1.id;
};
export async function deleteItem(url) {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(
                `Failed to delete item, received status code ${response.status}`
            );
        }

        return response.json();
    } catch (error) {
        console.error(error);
    }
}
