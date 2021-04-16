<template>
  <div class="w-100">
      <div class="conteiner-fluid d-flex justify-content-between align-items-center">
        <div class="logo left-area d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="126" height="126"
                viewBox="0 0 126 126">
                <image id="_50s" data-name="50s" width="126" height="126"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABNySURBVHhe7Z0J0NVUmoYFQcXBhcUFpLUBRYRGRaFFHWRwGWtwbWi3ERktRWmXGcBRZLMs9w0HGpeWblCQcl8QN0At9wUBtUVRWxEVcFdERNkz73vNnfn5/W6S+/83ycnN+1Q9VZbkS3KSnP+e5JzznU2EEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIURMNIBbw51hJ9gN7g97+vK/+f/4b9yG2zJGiKqAD/Mu8N/gf8JxcBqcC5fCNdArU8YwlvvgvrhP7pvH4LFUgYSz/BaeBMfC5+FyaD3kccpj8tg8B54Lz0mIVNgBngInw0+g9cC64KdwCuS57giFiI2OcCScDddD64F0WZ4zz51lYFmEqDdt4DD4d2g9dFmWZboI/gYKEZlG8A/wCbgOWg9XNckyzoB9IcsuhEkLOBwuhtaDlAeXwBGwJRSiAPsZ+Mn0R2g9NHl0Jfwz5LUROYVt77/A1dB6SOQv1+ZWqIqSI5rDMfBnaD0U8tfyWt0A2QwVVUpjOBh+B62HQIbLazcE8lqKKqIXfAdaN12W7wL4L1BknG0h29AboHWjZd3lNf0r5DUWGeQYyMF91s2VlfMzeCwUGeGf4ARo3UwZn/w14bUXDrMvfA9aN1DG7/uQ81iEg5wFV0HrxsnkZN/JICgcYQs4EVo3S6bnJMh7I1KkFZwDrRsk05f3pjUUKfA76PJkJfmLvEddoEiQQ+H30Loh0j15rw6DIgE4b0EDDLMn71k/KGKkP1wLrRsg3Zf3jvPjRQycAbM4F1xuLO/hQCgqCH85VDmqR95L/ZJUCL5zqFlVffKe6p2knvBrlV7Iq1feW33dqiPs59Cn3OqX91j9JGXCHnJ1AuZHZoBUj3tEOH5Hw0fyJ5NyN4EiBA08zK+3QREAh6xbF07mxz9BYcDJTprPIfllqzsUNeBUTc0ElEX/AZtC4aM55LK2f4MCMPuIdYGkZJb9XMOcSkrNI0vJlELNYG5R00qGyXRCuYTpQJXxUIbJZ6Q3zBVMfqxcuTKqzAWcq4TZzBBuXQgpSzkU5gKuz6ElCGS5LoO5WJ+EC7FYF0DKMMfCqobLnmllJ1lXORRpF1i1cE1Aq+BSRpVdA1UJF4LU9FlZX/kMVeWvCJcVtgosZbmOh1UFvz5oHXJZKbmOe0tYNYyAVkGlrKsjYVXQCC6BViGlrKt8pqqid52J36wCxmKHDh28nj17xm737t3N49fFNm3aeKeccop37bXXenfffbf35JNPes8//7z3zDPPeNOmTfNuueUWb8iQIV6PHj28TTfd1NxHTq2KxHMzoFW4WLz99tu9JPjwww/N40eVDzorxSuvvOJt2LDB32s4X375pTdmzBhvp512MvebM2fCTNMGroNW4WIxCxVkv/3289566y1/T3Vj5cqV3kUXXZT3XxTm+GXnc2YZBq2CxabrFeS8887z1q5d6++l/sycOdPbaqutzGPlxOEws/wdWoWKTZcrCN8j4uDpp5/2GjdubB4zB74FM0lHaBUoVl2tIAcffLC3bt06P7ry8AXfOm5O7AQzB79TW4WJVRcryBZbbOF99NFHfmQ8sPLtvffe5vFz4CiYOWZDqzCx6mIFGTx4sB8VzFdffeVdcsklXq9evbyOHTt6++67rzdw4EBv7ty5/hbBPPzww+bxcyBzOWeKHWEqK0KFVZClS5d6ixYtqrfPPvusefzaNmzYsLB9GG+88Ya3/fbbm/vgl6qbbrrJ37I069ev99q1a2fuo8rlvHWuCJAZuLyWVZDYDasge+65pxkXl7179/aPXJrVq1d77du3N+OLspKwEoUxevRoMz4HDoCZYQq0ChG7rlWQsWPH+kcuzT333GPG1va0007zI0rD5pgVmwPvgJmBC6JYhYhd1yrI/Pnz/SOXhg++FVvb1q1b+xGlYTNr2223NePLsUGDBt7WW2/ttWzZsrA/NhWt7RxyMcwEbaFVgER0qYI0bdq08MCGUc64ru+++86PKg0/KVuxQTZq1Mjr06ePd/PNNxeacj/99JO/t19g5+bChQu9+++/3xs0aJC33XbbmftJ2XbQef4dWiefiC5VkG7duvlHDWbnnXc24y3fffddP6o055xzjhlryV8Gfin75JNP/OhorFq1qjCIkr8w1n5T8mToPOOgdfKJ6FIF6devn3/UYFq0aGHGW0b55HvNNdeYsbXlrwB74evD559/7u2///7m/lOQs1ad5wVonXwiulRB2BSJQvPmzc14yzlz5vhRpZk0aZIZW1P+5V+wYIEfUT9W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" />
            </svg>
            <p class="performance m-0">PERFORMANCE</p>
        </div>

        <div class="rigt-area d-flex align-items-center justify-content-center">
            <button class="btn buy-token m-0"><span class="btn-text">Buy Token</span></button>
            <button class="btn collect-wallet m-0 ml-3"><span class="btn-text">Connect Wallet</span></button>
            <button class="btn rectangle-button m-0"><span class="btn-text">...</span></button>

           <!--  <a href=""><img src="Group 45.svg" alt=""></a> -->
        </div>
    </div>
    <div class="col conteiner-fluid justify-content-between">
        <hr class="hr">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='css'>
.buy-token {
  width: 248px;
  height: 51px;
  margin: 35px 7px 49.5px 249px;
  padding: 9px 52px 8px 53px;
  box-shadow: 0 0 10px 0 rgba(242, 169, 0, 0.5);
  border: solid 3px #f2a900;
}
.btn-text {
  width: 143px;
  height: 34px;
  font-family: MicrosoftSansSerif;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}
.connect-wallet {
  width: 248px;
  height: 51px;
  margin: 34px 22px 50.5px 32px;
  padding: 9px 22px 8px 23px;
  border-radius: 11px;
  box-shadow: 0 0 10px 0 rgba(0, 220, 255, 0.5);
  border: solid 3px #00dcff;
}
.select-menu {
  width: 51px;
  height: 51px;
  margin: 37px 1px 47.5px 22px;
  padding: 37px 5px 4px 6px;
  border-radius: 11px;
  box-shadow: 4px 4px 7px 0 #000000;
  background-color: #171717;
}
.select-text {
  width: 1920px;
  height: 1080px;
  padding: 9px 42px 27.1px 5px;
  background-color: #1c1c1c;
}
</style>