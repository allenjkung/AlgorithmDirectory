export const algorithms = [
    "Selection Sort",
    "Bubble Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quicksort",
    "Heapsort",
    "Counting Sort",
    "Radix Sort",
    "Bucket Sort"
];

interface AlgorithmInfo {
    link: string
}
interface AlgorithmnJSON {
    [key: string]: AlgorithmInfo
}
export const algorithmsJSON: AlgorithmnJSON = {
    "Selection Sort": {link: "SelectionSort"} as AlgorithmInfo,
    "Bubble Sort": {link: "BubbleSort"} as AlgorithmInfo,
    "Insertion Sort": {link: "InsertionSort"} as AlgorithmInfo,
    "Merge Sort": {link: "MergeSort"} as AlgorithmInfo,
    "Quicksort": {link: "Quicksort"} as AlgorithmInfo,
    "Heapsort": {link: "Heapsort"} as AlgorithmInfo,
    "Counting Sort": {link: "CountingSort"} as AlgorithmInfo,
    "Radix Sort": {link: "RadixSort"} as AlgorithmInfo,
    "Bucket Sort": {link: "BucketSort"} as AlgorithmInfo
};

export const dataStructures = [
    "Node",
    "Singly Linked List",
    "Doubly Linked List"
]

interface DataStructureInfo {
    link: string
}
interface DataStructureJSON {
    [key: string]: DataStructureInfo
}

export const dataStructureJSON: DataStructureJSON = {
    "Node": {link: "Node"} as AlgorithmInfo,
    "Singly Linked List": {link: "SinglyLinkedList"} as AlgorithmInfo,
    "Doubly Linked List": {link: "DoublyLinkedList"} as AlgorithmInfo
}