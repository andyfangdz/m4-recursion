def quicksort(list):
    if len(list) <= 1:
        return list
    pivot = list[0]
    lesser = [item for item in list if item < pivot]
    pivots = [item for item in list if item == pivot]
    greater = [item for item in list if item > pivot]
    lesser = quicksort(lesser)
    greater = quicksort(greater)
    return lesser + pivots + greater
