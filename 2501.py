# def divisor(N, K):
#   divisors = []
#   i = 1;
#   while i <= N:
#     i = i + 1
#     if N % i == 0:
#       divisors.push(i);
#   if (divisors.length < K):
#     print(0)
#   else:
#     print(divisors[K-1])
N, K = map(int, input().split())
lst = []
for i in range(1, N+1):
  if N % i == 0:
    lst.append(i)

if len(lst) < K :
  print(0)
else :
  print(lst[K-1])