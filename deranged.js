// Your company has an annual holiday party with a secret Santa event. In recent years, people have been getting assigned as their own secret Santa and buying themselves foot baths. As the analyst of the party planning committee, you are starting to get almost deranged because of how frequently this activity is occurring. Help keep yourself sane by determining how many ways the people in a group of size n can get assigned so that no one gets assigned to be their own secret Santa.

// Example
// For n = 3, the output should be
// deranged(n) = 2.
// There are 3 people in the group. Let's call them Bob, Joe, and Jane. There are 6 ways to assign these people to each other:

// Bob -> Bob, Joe -> Joe, Jane -> Jane
// Bob -> Bob, Joe -> Jane, Jane -> Joe
// Bob -> Joe, Joe -> Bob, Jane -> Jane
// Bob -> Jane, Joe -> Joe, Jane -> Bob

// Bob -> Joe, Joe -> Jane, Jane -> Bob
// Bob -> Jane, Joe -> Bob, Jane -> Joe

// Only in the last two combinations is no one assigned to themselves. So the answer is 2.

function deranged(n) {
  if (n <= 0) return 1;
  return (n - 1) * (deranged(n - 1) + deranged(n - 2));
};

const derangedIterative = (n) => {
  let first = 1;
  let second = 1;
  let saved;
  
  for (let i = 1; i <= n; i++) {
    saved = second;
    second = (i - 1) * (second + first);
    first = saved;
  }

  return second;
};

console.log(derangedIterative(2));
console.log(deranged(2));