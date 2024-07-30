import { Button, Popover, Text, View, YStack } from 'tamagui'

export default function Index() {
  return (
    <YStack flex={1} ai={'center'} jc={'center'}>
      <Popover allowFlip placement="bottom">
        <Popover.Trigger asChild>
          <View w={100} h={100} bg={'red'}>
            <Text>Trigger</Text>
          </View>
        </Popover.Trigger>
        <Popover.Content
          bg={'green'}
          borderWidth={1}
          borderColor="$borderColor"
        >
          <View h={100} w={100} bg={'yellow'}>
            <Text>Content</Text>
          </View>
        </Popover.Content>
      </Popover>
    </YStack>
  )
}
