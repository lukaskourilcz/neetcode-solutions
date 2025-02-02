if (head === null) return head;
    
    let current = head;
    
    // Traverse the list until the end.
    while (current !== null && current.next !== null) {
        // If the current node's value equals the next node's value,
        // skip the next node.
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            // Move to the next node only if no deletion occurred.
            current = current.next;
        }
    }
    
    return head;