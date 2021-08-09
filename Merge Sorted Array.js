var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[i+m] = nums2[i];
    } //this will transfer the nums2[] into the nums1[]
    
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < nums1.length; i++) {
            if (nums1[i - 1] > nums1[i]) {
                done = false;
                let tmp = nums1[i - 1];
                nums1[i - 1] = nums1[i];
                nums1[i] = tmp;
            }
        }
    }   //this will sort the nums1[] into ascending order
    
    return nums1;
};
