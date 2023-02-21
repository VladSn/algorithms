# Linked Lists

Linked lists are a popular data structure used in computer programming. 
They are composed of nodes, each of which contains a value and a pointer to the next node in the list. 
While linked lists have several advantages, they also have some disadvantages.

➕ Dynamic size: Linked lists are dynamic data structures, which means they can grow or shrink as needed during program execution. This makes them a useful choice when the size of the data to be stored is unknown at compile time.

➕ Efficient insertion and deletion: Inserting or deleting an element in a linked list involves changing the pointers of adjacent nodes, rather than moving all elements as in an array. This makes these operations faster than in an array.

➕ Memory efficiency: Linked lists can use memory efficiently since they only allocate memory for the nodes that are actually needed.

➖ Sequential access: Unlike arrays, linked lists do not allow for random access of elements. To access an element, you must start at the beginning of the list and traverse the nodes until you reach the desired element. This can make operations like searching for a specific element slower.

➖ Extra memory for pointers: Each node in a linked list requires an additional pointer, which can lead to increased memory usage compared to arrays.

➖ Not cache-friendly: Linked lists can be less efficient in terms of caching because the nodes are not stored sequentially in memory. This means that iterating over the elements in a linked list may result in frequent cache misses, which can slow down performance.
