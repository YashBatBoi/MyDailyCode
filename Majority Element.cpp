// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

class Solution {
public:
    int majorityElement(vector<int>& v) {
        int ma = v[0], cnt = 1;
        int n = v.size();
        for(int i=1; i<n; i++){
            if(v[i]==ma && cnt>=0) { cnt++; continue; }
            if(v[i]!=ma){
                if(cnt==0) { ma = v[i]; cnt = 1; }
                else cnt--;
            }
        }
        return ma;
    }
};
