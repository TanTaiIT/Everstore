<script setup>
import Button from '../components/Button/Button.vue';
import Checkbox from '../components/Checkbox/Checkbox.vue';
import TitlePage from '../components/TitlePage/TitlePage.vue';
</script>
<template>
  <div class="service">
    <div class="content-wrapper">
      <TitlePage :title="'Service'"/>

      <div class="body-wrapper mt-2 p-3">


        <div class="flex mt-5 gap-[10px]">
          <div class="flex-1">
            <div class="flex items-center justify-between mb-3">
              <Checkbox>
                <template #label>
                  <label class="cursor-pointer" for="checkbox">Show Inactive</label>
                </template>
              </Checkbox>

              <div class="text-right">
                <Button> Category </Button>
              </div>
        </div>
            <table>
              <thead>
                <tr>
                  <th>Shared</th>
                  <th>Service Category</th>
                  <th>Edit</th>
                  <th>View</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>X</td>
                  <td>Nguyen Tan Tai</td>
                  <td><Button :outline="true" variant="white-normal" text-color="blue-normal">Edit</Button></td>
                  <td><Button text-color="white-normal">View</Button></td>
                </tr>

                <tr>
                  <td>X</td>
                  <td>Nguyen Tan Tai</td>
                  <td ><Button text-color="blue-normal" :outline="true" variant="white-normal">Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>

                <tr>
                  <td>X</td>
                  <td>Nguyen Tan Tai</td>
                  <td><Button text-color="blue-normal" :outline="true" variant="white-normal">Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <div class="w-[90px] h-[30px] bg-green rounded-full flex items-center justify-center text-white-normal">
                  Tai Nguyen
                </div>
                <Checkbox class="ml-3">
                  <template #label>
                    <label class="cursor-pointer" for="checkbox">Show Inactive</label>
                  </template>
                </Checkbox>
              </div>

              <Button>
                Add Service
              </Button>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Shared</td>
                  <td>Service</td>
                  <td>Price</td>
                  <td>Estimated Time</td>
                  <td>Edit</td>
                  <td>Prepaid Service</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>X</td>
                  <td>Suck D</td>
                  <td>1.000.000</td>
                  <td>2 Hour</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>
                <tr>
                  <td>X</td>
                  <td>Suck D</td>
                  <td>1.000.000</td>
                  <td>2 Hour</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>
                <tr>
                  <td>X</td>
                  <td>Suck D</td>
                  <td>1.000.000</td>
                  <td>2 Hour</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>

                <tr>
                  <td>X</td>
                  <td>Suck D</td>
                  <td>1.000.000</td>
                  <td>2 Hour</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>
                <tr>
                  <td>X</td>
                  <td>Suck D</td>
                  <td>1.000.000</td>
                  <td>2 Hour</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
